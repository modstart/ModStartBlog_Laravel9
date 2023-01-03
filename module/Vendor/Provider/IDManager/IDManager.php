<?php


namespace Module\Vendor\Provider\IDManager;


class IDManager
{
    
    private static $instances = [];

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

    
    public static function get($name)
    {
        $name = modstart_config($name, $name);
        foreach (self::all() as $manager) {
            if ($manager->name() == $name) {
                return $manager;
            }
        }
        return null;
    }
}