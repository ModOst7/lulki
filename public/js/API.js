var API = undefined;
console.log('asd');
API = window.parent.window.parent.window.parent.window.API_1484_11;

var SetScore = null;
var SetMaxScore = null;
var SetMinScore = null;
var GetUserInfo = null;
var SetStatus = null;
var GetScore = null;

if(API == undefined){
    API = window.parent.window.parent.window.parent.window.API;
    if(API != undefined){
        SetScore = (score)=>{
            var status = API.LMSSetValue("cmi.core.score.raw",score);
            API.LMSCommit("")
            return status;
        }
        SetMaxScore = (score)=>{
            var status = API.LMSSetValue("cmi.core.score.max",score);
            API.LMSCommit("")
            return status;
        }
        SetMinScore = (score)=>{
            var status = API.LMSSetValue("cmi.core.score.min",score);
            API.LMSCommit("")
            return status;
        }
        GetUserInfo = ()=>{
            return API.LMSGetValue("cmi.core.student_name")

        }
        SetStatus = (status) =>{
            var status = API.LMSSetValue("cmi.core.lesson_status",status)
            API.LMSCommit("")
            return status;
        }
        GetScore = ()=>{
            return API.LMSGetValue("cmi.core.score.raw");
        }
    }
}else{
    SetScore = (score)=>{
        var status = API.SetValue("cmi.score.raw",score);
        API.Commit("");
        return status;
    }
    SetMaxScore = (score)=>{
        var status = API.SetValue("cmi.score.max",score);
        API.Commit("");
        return status;
    }
    SetMinScore = (score)=>{
        var status = API.SetValue("cmi.score.min",score);
        API.Commit("");
        return status;
    }
    GetUserInfo = ()=>{
        return API.GetValue("cmi.learner_name") 
    }
    SetStatus = (status)=>{
        if(status == "completed" || status == "incomplete"){
            var status = API.SetValue("cmi.completion_status",status); 
        }
        else if(status == "passed" || status == "failed"){
            var status = API.SetValue("cmi.success_status", status); 
        }
        API.Commit("");
        return status;
    }
    GetScore = ()=>{
        return API.GetValue("cmi.score.raw");
    }
}



