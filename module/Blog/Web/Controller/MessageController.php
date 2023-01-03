<?php

namespace Module\Blog\Web\Controller;

use ModStart\Core\Input\Request;
use ModStart\Core\Input\Response;
use ModStart\Core\Util\PageHtmlUtil;
use ModStart\Module\ModuleBaseController;

class MessageController extends ModuleBaseController
{
    public function index(\Module\Blog\Api\Controller\MessageController $api)
    {
        $viewData = Response::tryGetData($api->paginate());
        $viewData['pageHtml'] = PageHtmlUtil::render($viewData['total'], $viewData['pageSize'], $viewData['page'], '?' . Request::mergeQueries(['page' => ['{page}']]));
        return $this->view('blog.message', $viewData);
    }
}
