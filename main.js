var data = [1, 4, 8, 15, 16, 23, 42];
d3.selectAll("section")
    .attr("class", "special")
    .append("div")
    .html("Hello, world!!");

var section = d3.selectAll("section");

section.append("div")
    .html("First!");

section.append("div")
    .html("Second.");

var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px";})
    .text(function(d) { return d; });
