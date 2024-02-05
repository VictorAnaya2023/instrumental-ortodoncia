<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      


        if (Schema::hasTable('users')) return;

Schema::create('users', function(Blueprint $table)
{
	$table->id('id');
	$table->string('username', 100)->nullable();
    $table->string('first_name', 100)->nullable();
    $table->string('last_name', 100)->nullable();
    $table->string('avatar_url')->nullable();
    $table->string('gender', 20)->nullable();
    $table->string('email')->unique();
    $table->string('password', 256)->nullable();
  	$table->rememberToken();
	$table->timestamps();

    $table->index('id');

    $table->collation = config('database.connections.mysql.collation');
    $table->charset = config('database.connections.mysql.charset');
});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
