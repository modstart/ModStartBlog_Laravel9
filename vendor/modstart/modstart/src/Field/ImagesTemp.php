<?php


namespace ModStart\Field;


use ModStart\Core\Input\Response;
use ModStart\Core\Util\ConvertUtil;
use ModStart\Data\DataManager;

class ImagesTemp extends AbstractField
{
    protected $width = 80;
    protected static $js = ['asset/common/uploadButton.js'];

    protected function setup()
    {
        $this->addVariables([
            'server' => modstart_admin_url('data/file_manager/image'),
        ]);
    }

    public function server($server)
    {
        $this->addVariables(['server' => $server]);
        return $this;
    }

    public function unserializeValue($value, AbstractField $field)
    {
        return ConvertUtil::toArray($value);
    }

    public function serializeValue($value, $model)
    {
        return json_encode($value);
    }

    public function prepareInput($value, $model)
    {
        $value = ConvertUtil::toArray($value);
        if (is_array($value)) {
            foreach ($value as $k => $v) {
                if (DataManager::isDataTemp($v)) {
                    $ret = DataManager::storeTempDataByPath($v);
                    if (Response::isError($ret)) {
                        continue;
                    }
                    $value[$k] = DataManager::fix($ret['data']['path']);
                }
            }
        }
        return $value;
    }
}
