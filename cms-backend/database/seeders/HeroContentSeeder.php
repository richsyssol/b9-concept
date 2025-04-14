<?php

namespace Database\Seeders;

use App\Models\HeroContent;
use Illuminate\Database\Seeder;

class HeroContentSeeder extends Seeder
{
    public function run()
    {
        $heroContents = [
            [
                'image_url' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
                'title' => 'Welcome to Ishani Enterprises',
                'description' => 'Empowering businesses with exceptional solutions.',
                'order' => 1,
                'is_active' => true
            ],
            [
                'image_url' => 'https://images.unsplash.com/photo-1581092580504-4c4c8c4d6f7e?auto=format&fit=crop&w=1400&q=80',
                'title' => 'Quality & Commitment',
                'description' => 'Delivering trusted services with professionalism and integrity.',
                'order' => 2,
                'is_active' => true
            ],
            [
                'image_url' => 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
                'title' => 'Your Partner in Progress',
                'description' => 'We aim to grow together through innovation and dedication.',
                'order' => 3,
                'is_active' => true
            ],
        ];

        foreach ($heroContents as $content) {
            HeroContent::create($content);
        }
    }
}
