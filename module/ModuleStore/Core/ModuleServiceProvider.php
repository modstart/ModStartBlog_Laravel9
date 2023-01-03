<?php

namespace Module\ModuleStore\Core;

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
                    'title' => L('System Manage'),
                    'icon' => 'code-alt',
                    'sort' => 700,
                    'children' => [
                        [
                            'title' => L('Module Manage'),
                            'rule' => 'ModuleStoreManage',
                            'url' => '\Module\ModuleStore\Admin\Controller\ModuleStoreController@index',
                        ]
                    ]
                ]
            ];
        });
    }

    
    public function register()
    {

    }
}
