<?php


namespace Module\Vendor\Provider\SuperSearch;



class QuickSuperSearchBiz extends AbstractSuperSearchBiz
{
    protected $name;
    protected $title;
    protected $field;

    public static function make($name, $title, $field)
    {
        $biz = new static();
        $biz->name = $name;
        $biz->title = $title;
        $biz->field = $field;
        return $biz;
    }

    public function name()
    {
        return $this->name;
    }

    public function title()
    {
        return $this->title;
    }

    public function fields()
    {
        return $this->field;
    }


}
