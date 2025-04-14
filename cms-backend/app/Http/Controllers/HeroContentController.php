<?php

namespace App\Http\Controllers;

use App\Models\HeroContent;
use Illuminate\Http\Request;

class HeroContentController extends Controller
{
    public function index()
    {
        $heroContents = HeroContent::where('is_active', true)
            ->orderBy('order')
            ->get();
            
        return view('hero.index', compact('heroContents'));
    }
}