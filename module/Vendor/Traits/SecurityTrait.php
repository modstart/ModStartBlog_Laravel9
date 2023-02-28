<?php


namespace Module\Vendor\Traits;


use Illuminate\Support\Facades\Session;
use ModStart\Core\Input\Request;

trait SecurityTrait
{
    private function checkSecuritySecondVerify()
    {
        $passwordCorrectMd5 = modstart_config('Vendor_SecuritySecondVerifyPassword');
        if (!$passwordCorrectMd5) {
            return;
        }
        $securityPasswordVerifyTime = intval(Session::get('Vendor_SecuritySecondVerifyTime'));
        if ($securityPasswordVerifyTime < time()) {
            header('Location: ' . modstart_admin_url('security/second_verify', ['redirect' => Request::currentPageUrl()]));
            exit();
        }
        Session::set('Vendor_SecuritySecondVerifyTime', time() + 3600);
    }
}
