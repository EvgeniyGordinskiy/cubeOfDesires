<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsersDesireRequest;
use App\Traits\YesNoTrait;
use App\UsersDesire;
use Illuminate\Support\Facades\Auth;

class UsersDesireController extends Controller
{
    use YesNoTrait;

    public function create(UsersDesireRequest $request) {
        $desire = new UsersDesire();
        $desire->question = $request->question;
        $desire->answer = $request->answer;
        $desire->user_id = Auth::user()->id;
        $desire->yesNoServer = Auth::user()->yesNoService->url;

        if($desire->save()) {
            $this->respondWithSuccess('Ok');
        }
        $this->respondWithError('Error while saving data', 500);
    }
    
    public function getAnswer()
    {
        $service = $this->getYesNoService();
        $answer = $service->getAnswer();
        if (!$answer) {
            $this->respondWithError('Service ' . get_class($service) . ' not available.', 503);
        }
       return $this->respondWithData(['answer' => $answer]);
    }
}
