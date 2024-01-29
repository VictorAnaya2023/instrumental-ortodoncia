<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstrumentalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instrumental', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description', 150)->nullable();
            $table->string('file_name');
            $table->string('mime', 50)->nullable();
            $table->integer('file_size')->nullable()->unsigned();
            $table->integer('user_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instrumental');
    }
}
