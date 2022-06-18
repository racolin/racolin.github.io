// Đổi màu Education-Accordion
function swapcolor(el) {
    let card_header = document.querySelectorAll(".card-header");
    card_header.forEach(element => {
        if (element.classList.contains("edu-item-title")) {
            element.classList.remove("edu-item-title");
        }
    });
    el.classList.add("edu-item-title");
    
}
// Hằng số
waitspace = 3;
waitfinish = 10;
wait = 300;
amount_square = 25;
max_square = 120;
max_left = 95;
max_delay = 15;
max_run = 40;
min_run = 10; 
// Chuỗi đầu vào
let content = "HELLO, I AM TIN";

content = standardized(content.split(""));
// Chuẩn hóa chuỗi đầu vào
function standardized(s) {
    // Đếm số dấu cách
    i = 0;
    for (j = 0; j < s.length; j++) {
        if (s[j] === " ") {
            i++;
        }
    }

    let ref = new Array(s.length + i * waitspace + waitfinish);
    ref[0] = s[0];
    i = 1;
    for (j = 1; j < s.length; j++) {
        if (s[j] === " ") {
            ref[i] = ref[i - 1] + "&nbsp"; i++;
            for (t = 0; t < waitspace; t++) {
                ref[i++] = ref[i - 2];
            }
        }
        else {
            ref[i++] = ref[i - 2] + s[j];
        }
    }
    for (j = 0; j < waitfinish; j++) {
        ref[i + j] = ref[i + j - 1];
    }
    return ref;
}

let count = -1;
var hellotime = setInterval(hello , wait);
function hello() {
    count = (count + 1) % content.length;
    let hellomin_content = document.getElementById("hellomin");
    let hello_content = document.getElementById("hello");
    hello_content.innerHTML = content[count];
    hellomin_content.innerHTML = content[count];
}

// Khởi tạo các khối vuông [x, y, z, t]
// x <=> left: x%;
// y <=> kích thước khối vuông
// z <=> số giây delay
// t <=> số giây chạy hết một lượt
square = [];
for (i = 0; i < amount_square; i++) {
    square.push([Math.random() * max_left, Math.random() * max_square, Math.random() * max_delay, Math.random() * (max_run - min_run) + min_run]);
}
square.forEach(element => {
    property = "left:" + element[0] + "%;width:" + element[1] + "px;height:" + element[1] + 
    "px;animation-delay:" + element[2] + "s;animation-duration:" + element[3] + "s;";
    child = document.createElement("li");
    child.setAttribute("style", property);
    document.getElementById("circles").appendChild(child);
});
listID_X_left = ['android', 'database', 'teamwork', 'searches', 'edu-pic', 'goals', 'award', 'volunteer'];
listID_X_right = ['web', 'oop', 'figma', 'english', 'edu-content', 'hobbies', 'study', 'program'];


listID_Y_top = ['title-skills', 'edu', 'me','project-title', 'busmap', 'foody', 'beauty_online'];
listID_Y_top_little = ['s_project1', 's_project2', 's_project3', 's_projects_title', 'd_projects_title', 'n_projects_title'];
function scr() {
    handle_temp(listID_X_left, "transform: translate(0); opacity: 1;", "transform: translate(-200px); opacity: 0;");
    handle_temp(listID_X_right, "transform: translate(0); opacity: 1;", "transform: translate(200px); opacity: 0;");
    handle_temp(listID_Y_top, "transform: translateY(0); opacity: 1;", "transform: translateY(-50px); opacity: 0;");
    handle_temp(listID_Y_top_little, "transform: translateY(0); opacity: 1;", "transform: translateY(-20px); opacity: 0;");
}
function handle_temp(listel, style1, style2) {
    listel.forEach(element => {
        handle_scroll(document.getElementById(element), style1, style2);
    });
}
function handle_scroll(el, style1, style2) {
    if (el.getBoundingClientRect().top < 800) {
        el.setAttribute("style", style1);
    }
    else {
        el.setAttribute("style", style2);
    }
}
