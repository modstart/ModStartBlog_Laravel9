<?php


namespace Module\Vendor\Provider\Schedule;


use Illuminate\Console\Scheduling\Schedule;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Util\RandomUtil;
use ModStart\Core\Util\StrUtil;
use ModStart\Core\Util\TimeUtil;


class ScheduleProvider
{
    
    private static $instances = [
    ];

    
    public static function register($provider)
    {
        self::$instances[] = $provider;
    }

    
    public static function all()
    {
        foreach (self::$instances as $k => $v) {
            if ($v instanceof \Closure) {
                self::$instances[$k] = call_user_func($v);
            } else if (is_string($v)) {
                self::$instances[$k] = app($v);
            }
        }
        return self::$instances;
    }

    public static function callByName($name)
    {
        foreach (ScheduleBiz::all() as $provider) {
            if ($provider->name() == $name) {
                call_user_func([$provider, 'run']);
            }
        }
    }

    public static function call(Schedule $schedule)
    {
        $autoCleanHistory = true;
        foreach (ScheduleBiz::all() as $provider) {
                        
            $schedule->call(function () use ($provider, &$autoCleanHistory) {
                $data = [];
                $data['name'] = get_class($provider);
                $data['startTime'] = date('Y-m-d H:i:s');
                $data['status'] = RunStatus::RUNNING;
                $data = ModelUtil::insert('schedule_run', $data);
                $dataId = $data['id'];
                $data = [];
                try {
                    $result = call_user_func([$provider, 'run']);
                    $data['result'] = StrUtil::mbLimit($result, 200);
                    $data['status'] = RunStatus::SUCCESS;
                } catch (\Exception $e) {
                    $data['result'] = StrUtil::mbLimit($e->getMessage(), 200);
                    $data['status'] = RunStatus::FAILED;
                }
                $data['endTime'] = date('Y-m-d H:i:s');
                ModelUtil::update('schedule_run', $dataId, $data);
                                if ($autoCleanHistory) {
                    $autoCleanHistory = false;
                    if (RandomUtil::percent(10)) {
                        ModelUtil::model('schedule_run')
                            ->where('created_at', '<', date('Y-m-d H:i:s', time() - TimeUtil::PERIOD_DAY * 7))
                            ->delete();
                    }
                }
            })->cron($provider->cron());
        }
    }
}
