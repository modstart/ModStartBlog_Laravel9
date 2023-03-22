<?php


namespace ModStart\Field;


class Values extends AbstractField
{
    protected $value = [];
    protected $width = 300;
    protected $listable = false;

    protected function setup()
    {
        $this->addVariables([
            'viewMode' => 'default',
        ]);
    }

    /**
     * 设置内容填写模式，default=列表，mini=一行
     * @param $viewMode string default|mini
     * @return $this
     */
    public function viewMode($viewMode)
    {
        $this->addVariables(['viewMode' => $viewMode]);
        return $this;
    }

    public function viewModeMini()
    {
        return $this->viewMode('mini');
    }

    public function unserializeValue($value, AbstractField $field)
    {
        $value = @json_decode($value, true);
        if (empty($value)) {
            $value = [];
        }
        return $value;
    }

    public function serializeValue($value, $model)
    {
        return json_encode($value);
    }

    public function prepareInput($value, $model)
    {
        $value = @json_decode($value, true);
        if (empty($value)) {
            $value = [];
        }
        return $value;
    }
}
