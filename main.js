const width     = 420,
      barHeight = 20;

const x = d3.scale.linear()
        .range([0, width]);

const chart = d3.select(".chart")
          .attr("width", width);

d3.tsv("http://0.0.0.0:8080/data.tsv", type, function(error, data) {
    x.domain([0, d3.max(data, function(d) {return d.value;})]);

    chart.attr("height", barHeight * data.length);

    const bar = chart.selectAll("g")
              .data(data)
              .enter().append("g")
              .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")";});
    bar.append("rect")
        .attr("width", function(d) {return x(d.value);})
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) {return x(d.value) - 3;})
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) {return d.value;});
    
});

function type(d) {
    d.value = +d.value;
    return d;
}
