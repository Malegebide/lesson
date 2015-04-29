var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    	    if(a<=0) return false;
    	   return true ;
    },
    isIsosceles : function(a,b,c) 
     {   
    	    if(a!=b&&a!=c&&b!=c) return false ;
    	    if(a+b<=c||a+c<=b||c+b<=a) return false ;
    	    if((a+b<=c||a+c<=b||c+b<=a)&&(a-b>=c||a-c>=b||c-b>=a)) return false ;
    	    if(a<=0) return false;
    	    if(b<=0) return false;
    	    if(c<=0) return false;
    	    return true;
    	    
    },
    isScalene : function(a,b,c) 
    {   
   	    if(a+b<=c||a+c<=b||c+b<=a) return false ;
   	    if(a<=0) return false;
   	    if(b<=0) return false;
   	    if(c<=0) return false;
   	    return true;
   	    
   }
    
};
var quadrilateral={
		
		isQuadri:function(a,b,c,d)
		{
			
			if(a<=0) return false;
    	    if(b<=0) return false;
    	    if(c<=0) return false;
    	    if(d<=0) return false;
		}
}