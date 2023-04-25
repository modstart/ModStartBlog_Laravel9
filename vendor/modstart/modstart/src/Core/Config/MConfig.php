<?php

namespace ModStart\Core\Config;


/**
 * 提供统一的配置读写接口，都是操作string
 */
abstract class MConfig
{
    /**
     * 获取配置（进出都要是string）
     * @param $key string 配置key
     * @param $defaultValue string 请勿使用 null 会导致缓存不能生效
     * @param $useCache bool 是否使用缓存
     * @return string
     */
    public abstract function get($key, $defaultValue = '', $useCache = true);

    /**
     * 设置配置（值需要是string）
     * @param $key string
     * @param $value string
     * @return void
     */
    public abstract function set($key, $value);

    public abstract function remove($key);

    public function getWithEnv($key, $defaultValue = null)
    {
        $value = config('env.CONFIG_' . $key);
        if (null === $value) {
            $value = $this->get($key);
        }
        if (empty($value)) {
            return $defaultValue;
        }
        return $value;
    }

    public function setArray($key, $value)
    {
        $this->set($key, json_encode($value));
    }

    public function getArray($key, $defaultValue = [], $useCache = true)
    {
        $value = $this->get($key, json_encode($defaultValue), $useCache);
        $value = @json_decode($value, true);
        if (!is_array($value) || empty($value)) {
            $value = [];
        }
        return $value;
    }

    public function getBoolean($key, $defaultValue = false)
    {
        $value = $this->get($key, null);
        if (null === $value) {
            return $defaultValue;
        }
        return $value ? true : false;
    }

    public function getInteger($key, $defaultValue = 0)
    {
        $value = $this->get($key, null);
        if (null === $value) {
            return $defaultValue;
        }
        return intval($value);
    }

    public function getString($key, $defaultValue = '')
    {
        $value = $this->get($key, null);
        if (null === $value) {
            return $defaultValue;
        }
        return '' . $value;
    }
}

