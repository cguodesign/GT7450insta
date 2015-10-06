/**
 * In this example, we will request your first name and your profile picture from Facebook.
 * We will store the acquired information in these variables:
 */
String lat = "33.774552";
String lon = "-84.398914";
int dis;
String name;
String id[];
int numm;
 
/**
 * You need an Access Token to perform requests to the Facebook Graph API.
 * Access Tokens are only valid for a short period of time (1-2 hours).
 * Generate your Access Token here: https://developers.facebook.com/tools/explorer
 * Learn more about Access Tokens: https://developers.facebook.com/docs/facebook-login/access-tokens/
 */
String access_token = "CAACEdEose0cBACRLNl3WBKsUhvEqjuD872LjG9vEUHzdKyDn556PR3P1WyQpa0XT5DD644h8UG1LTWBEiYR0kMJpvcZCxbD9QAtO3IpZCIG0yMzAR9uI6zKvTcUEsCA2iB8DWLMm0OKDLbNL8ZAcEz1TndxXPKSQ3No1bRfLdzaDZAf5aNd4gOBeTlk68GlWRhBF0nky9Y7c1mSBkxeM";


void setup() {
  
  size(640, 480);
  background(255);
  
  /**
   * You can now perform Facebook Graph API requests using the custom function FB().
   * We will ask Facebook about your first name and your picture.
   * Learn more about Facebook Graph API: https://developers.facebook.com/docs/graph-api/quickstart/
   */
  JSONObject response = FB();
  /**
   * Lets take a look at the data we got from Facebook in the console:
   */
  //println(response);
  
  /**
   * We can now extract the information we want from the response.
   * Learn more about JSONObject: http://www.processing.org/reference/JSONObject.html
   */
  println(response.getJSONObject("data").size());
  numm = response.getJSONArray("data").size();
  
  for(int i=0;i<numm;i++) {
    String a = response.getJSONObject("data")[i];
  }
  //name = response.getJSONObject("data").getString("name");
  //id = response.getJSONObject("data").getString("name");
  //mutualfriends_amount = response.getJSONObject("mutualfriends").getJSONArray("data").size();
  //likes_amount = response.getJSONObject("likes").getJSONArray("data").size();
}


void draw() {
  
  fill(255,255,255);
  rect(0,0,width,height);
  
  fill(0);
  
  /**
   * Draw the data
   */
  
  for ( int i = 0; i< numm; i++){
    text( "Name: " + name, 50, 50 + i*10);
    text( "FB Id: " + id, 100, 50 + i*10);
  }
}

/**
 * Send a request to the Facebook Graph API  
 * @param   String  request  The Facebook Graph API Request
 * @return  JSONObject       The Facebook Graph Data
 */
JSONObject FB() {
  
  String json_string = "";
  
  String response[] = loadStrings("https://graph.facebook.com/v2.4/search?limit=5000&offset=0&type=place&format=json&center=" + lat + "," + lon + "&distance=850&access_token=" + access_token);
  
  
  for(int i=0;i<response.length;i++) {
    json_string += response[i];
  }
  
  JSONObject json = JSONObject.parse(json_string);
  
  //println("==============");
  //println("Request: " + request);
  //println("Response: " + json);
  //println("==============");
  
  return json;
}