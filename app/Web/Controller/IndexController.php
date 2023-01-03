<?php


namespace App\Web\Controller;

use Illuminate\Support\Str;
use Module\Vendor\Installer\Util\InstallerUtil;
use Module\Vendor\Provider\HomePage\HomePageProvider;
use ModStart\Core\Util\QrcodeUtil;

class IndexController extends BaseController
{
    public function index()
    {
        InstallerUtil::checkForInstallRedirect();
        return HomePageProvider::call(__METHOD__, '\\Module\\Blog\\Web\\Controller\\IndexController@index');
    }

    public function test()
    {

    }
}
