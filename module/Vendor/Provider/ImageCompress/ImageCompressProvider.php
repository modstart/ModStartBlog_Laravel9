<?php


namespace Module\Vendor\Provider\ImageCompress;


use Module\Vendor\Provider\ProviderTrait;

class ImageCompressProvider
{
    use ProviderTrait;

    
    public static function all()
    {
        return self::listAll();
    }

    
    public static function get($name)
    {
        return self::getByName($name);
    }

    public static function first()
    {
        foreach (self::all() as $item) {
            return $item;
        }
        return null;
    }
}
