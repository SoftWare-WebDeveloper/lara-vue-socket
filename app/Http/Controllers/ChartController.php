<?php

namespace App\Http\Controllers;


use App\Events\NewEvent;

class ChartController extends Controller
{


    /**
     * @return array
     */
    public function getData()
    {
        return [
            'labels' => ['июнь','июль',"август",'сентябрь'],
            'datasets' => [
                [
                    'label' => "продажи",
                    'backgroundColor' => "#F26202",
                    'data' => ['5000','0','5000','1000']
                ]
            ]
        ];
    }

    public function newEvent()
    {
        $data = [
            'labels' => ['июнь','июль',"август",'сентябрь'],
            'datasets' => [
                [
                    'label' => "продажи",
                    'backgroundColor' => "#F26202",
                    'data' => [rand(5, 6),rand(5, 6),rand(5, 6),rand(5, 6)]
                ]
            ]
        ];
        event(new NewEvent($data));

    }
}
