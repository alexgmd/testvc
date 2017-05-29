jQuery(function($){
    countdown.init();
});

countdown = {
    endTime: new Date('December 31 00:00:00 2015'), //sets end time to 31/12/2015
    displayElement: {
        day:  null,
        hour: null,
        min:  null,
        sec:  null
    },
     
    // initialisation 
    init: function(){
        this.displayElement.day  = jQuery('#countdown-day');
        this.displayElement.hour = jQuery('#countdown-hour');
        this.displayElement.min  = jQuery('#countdown-min');
        this.displayElement.sec  = jQuery('#countdown-sec');
        // start
        this.tick();
        window.setInterval("countdown.tick();", 1000); // 1000 ms
    },
     
    // update
    tick: function(){
        var timeNow  = new Date();
        // cannot be below 0
        if( timeNow > this.endTime ){
            timeNow = this.endTime;
        }
        var diff = this.dateDiff(timeNow, this.endTime);
        this.displayElement.day.text(diff.day);
        this.displayElement.hour.text(diff.hour);
        this.displayElement.min.text(diff.min);
        this.displayElement.sec.text(diff.sec);
    },
     
    // extraction of each time component
    dateDiff: function(date1, date2){
        var diff = {}                           
        var tmp = date2 - date1;
 
        tmp = Math.floor(tmp/1000);             
        diff.sec = tmp % 60;                    // seconds
        tmp = Math.floor((tmp-diff.sec)/60);   
        diff.min = tmp % 60;                    // minutes
        tmp = Math.floor((tmp-diff.min)/60);    
        diff.hour = tmp % 24;                   // hours
        tmp = Math.floor((tmp-diff.hour)/24);   
        diff.day = tmp;                         // days
 
        return diff;
    }
};
 
