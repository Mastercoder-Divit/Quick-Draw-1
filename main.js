array_1 = ['pen','paper','bottle','alarm clock','zigzag','pencil','box','shirt','phone','sun','arm','ambulance','angel','truck','anvil','apple','orange','airplane','umbrella','underwear','vase','violin','watermelon','waterslide','windmill','wheel'];
random_number = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch to be drawn: " + Element_of_array;

time_counter = 0;
time_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;