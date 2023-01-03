<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class BlogCommentFieldsModify extends Migration
{
    
    public function up()
    {
        Schema::table('blog_comment', function (Blueprint $table) {
            $table->integer('memberUserId')->nullable()->comment('');
            $table->tinyInteger('status')->nullable()->comment('');
        });

        \ModStart\Core\Dao\ModelUtil::updateAll('blog_comment', [
            'memberUserId' => 0,
            'status' => \Module\Blog\Type\BlogCommentStatus::VERIFY_SUCCESS,
        ]);
    }

    
    public function down()
    {

    }
}
