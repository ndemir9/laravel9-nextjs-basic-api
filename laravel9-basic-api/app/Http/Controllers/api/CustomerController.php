<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Customer::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = Customer::create([
            'fullname'      => $request->fullname,
            'email'     => $request->email,
        ]);

        return response([
            'data' => $customer,
            'message' => 'Customer created.'
        ], 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::find($id);

        if($customer)
            return response($customer, 200);
        else
            return response(['message' => 'Customer not found!'], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $customer = Customer::where('id',$id)->first();

        $customer->fullname = $request->fullname;
        $customer->email = $request->email;

        $customer->save();

        return response([
            'data' => $customer,
            'message' => 'Customer updated.'
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $customer = Customer::where('id',$id)->first();

        $customer->delete();

        return response([
            'message' => 'Customer deleted.'
        ], 200);


    }
}
