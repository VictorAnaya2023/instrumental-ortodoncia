<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Validator;

class UserController extends BaseController
{
    public function index()
    {
        return User::all();
    }

    public function readbyid($id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return $this->sendError('User not found.');
        }
   
        return $user;
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
            'first_name' => 'required',
            'last_name' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('Instrumental')->accessToken;
        $success['username'] =  $user->username;
   
        return $this->sendResponse($success, 'User register successfully.');
    }


        public function update(Request $request, $id)
        {
            $input = $request->all();
       
            $validator = Validator::make($input, [
                'first_name' => 'required',
                'last_name' => 'required'
            ]);
       
            if($validator->fails()){
                return $this->sendError('Validation Error.', $validator->errors());       
            }
            $user = User::find($id);   
            $user->username = $input['username'];
            $user->first_name = $input['first_name'];
            $user->first_name = $input['last_name'];
            $user->save();
       
            return $this->sendResponse($user, 'User Updated Successfully.');
        }
    

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return $this->sendResponse([], 'User Deleted Successfully.');
    }

}
