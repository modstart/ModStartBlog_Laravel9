<?php


namespace Module\Blog\Web\Controller;


use ModStart\Core\Input\Response;
use ModStart\Module\ModuleBaseController;

class TagsController extends ModuleBaseController
{
    public function index(\Module\Blog\Api\Controller\TagsController $api)
    {
        $viewData = Response::tryGetData($api->all());
        return $this->view('blog.tags', $viewData);
    }
}
