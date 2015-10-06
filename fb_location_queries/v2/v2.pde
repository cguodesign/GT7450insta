JSONArray values;

void setup() {

  values = loadJSONArray("data/1.json");

  for (int i = 0; i < values.size(); i++) {
    
    JSONObject locations = values.getJSONObject(i); 

    String id = locations.getString("id");
    String name = locations.getString("name");

    println(id + ", " + name);
  }
}

// Sketch prints:
// 0, Capra hircus, Goat
// 1, Panthera pardus, Leopard
// 2, Equus zebra, Zebra