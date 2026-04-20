<?php

namespace App\Http\Controllers;

use App\Models\Wish;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class WishController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Wish::create($request->only('name', 'message'));

        return back();
    }

    public function destroy(Wish $wish): RedirectResponse
    {
        $wish->delete();

        return back();
    }
}
