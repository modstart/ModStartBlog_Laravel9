<?php

namespace Module\Nav\Util;

use Illuminate\Support\Facades\Cache;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Util\TreeUtil;
use Module\Nav\Type\NavPosition;

class NavUtil
{
    const CACHE_KEY_PREFIX = 'nav:';

    public static function add($position, $name, $link)
    {
        $sort = intval(ModelUtil::max('nav', 'sort')) + 1;
        ModelUtil::insert('nav', [
            'position' => $position,
            'name' => $name,
            'link' => $link,
            'sort' => $sort,
        ]);
    }

    
    public static function listByPosition($position = 'header')
    {
        $nodes = TreeUtil::modelToTree('nav', [
            'position' => 'position',
            'name' => 'name',
            'openType' => 'openType',
            'link' => 'link',
            'icon' => 'icon',
        ], 'id', 'pid', 'sort', ['enable' => true]);
        return array_filter($nodes, function ($item) use ($position) {
            return $item['position'] == $position;
        });
    }

    
    public static function listByPositionWithCache($position = 'header', $minutes = 600)
    {
        return Cache::remember(self::CACHE_KEY_PREFIX . $position, $minutes, function () use ($position) {
            return self::listByPosition($position);
        });
    }

    public static function hasData($position = 'header')
    {
        $values = self::listByPositionWithCache($position);
        return !empty($values);
    }

    public static function clearCache()
    {
        foreach (NavPosition::getList() as $k => $_) {
            Cache::forget(self::CACHE_KEY_PREFIX . $k);
        }
    }

}
