var ShovelHooks = module.exports = function(startData){
    //startData is passed to us from ParentHooks
    this._startData = startData;
}

ShovelHooks.prototype.onAfterLoad = function(){
    //called after the shovel loads the code, and before the
    //code is executed
}

ShovelHooks.prototype.onExecute = function(){
    //called just after the process runs any untrusted code
}

ShovelHooks.prototype.onKill = function(){
    //called just before the kill signal is sent to the process
}

ShovelHooks.prototype.onError = function(){
    //called when an error is thrown in the child process
}

ShovelHooks.prototype.onExit = function(){
    //called just before the child process exits. If the child
    //process was killed with kill -9, this won't get called
}