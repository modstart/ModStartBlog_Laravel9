<?php


namespace App\Admin\Core;


use Illuminate\Events\Dispatcher;
use Illuminate\Support\ServiceProvider;
use ModStart\Admin\Config\AdminMenu;

class ModuleServiceProvider extends ServiceProvider
{
    
    public function boot(Dispatcher $events)
    {
        AdminMenu::register(function () {
            return [
                [
                    'title' => '系统概况',
                    'icon' => 'home',
                    'sort' => 50,
                    'url' => '\App\Admin\Controller\IndexController@index',
                ]
            ];
        });
    }

    
    public function register()
    {

    }
}
