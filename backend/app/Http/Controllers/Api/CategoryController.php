<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use Validator;

class CategoryController extends BaseController
{

    public function index()
    {
        return Category::all();
    }

    public function readbyid($id)
    {
        $cat = Category::find($id);
        if (is_null($cat)) {
            return $this->sendError('Category not found.');
    }
   
         return $cat;
     }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $input = $request->all();
        $cat = Category::create($input);
        $success['category'] =  $cat;
   
        return $this->sendResponse($success, 'Category register successfully.');
    }


        public function update(Request $request, $id)
        {
            $input = $request->all();
       
            $validator = Validator::make($input, [
                'name' => 'required',
                'description' => 'required',
                'image' => 'required'
            ]);
       
            if($validator->fails()){
                return $this->sendError('Validation Error.', $validator->errors());       
            }
            $cat = Category::find($id);   
            $cat->name = $input['name'];
            $cat->description = $input['description'];
            $cat->image = $input['image'];
            $cat->save();
       
            return $this->sendResponse($cat, 'Category Updated Successfully.');
        }
    

    public function destroy($id)
    {
        $cat = Category::find($id);
        $cat->delete();
        return $this->sendResponse([], 'Category Deleted Successfully.');
    }

}
