$(function() {


    $("#server-1-link").on("keyup", function() {
        let server_1_link_input_el = $(this);
        let server_1_link_input_value = parseInt(server_1_link_input_el.val());
        let server_1_link_label_el = $(".server-1-link-label");

        if(server_1_link_input_value>=1 && server_1_link_input_value<1000){
            server_1_link_label_el.text("Bandwidth: " + server_1_link_input_value + " MBps")
                .css("background-color", "#d3ffe9");

            server_1_link_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function() {
                if (server_1_link_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    server_1_link_label_el.css("background-color", "");
                }
            }, 500);
        } else if(server_1_link_input_value>=1000 && server_1_link_input_value<10001){
            server_1_link_label_el.text("Bandwidth: " + server_1_link_input_value/1000 + " GBps")
                .css("background-color", "#d3ffe9");

            server_1_link_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function() {
                if (server_1_link_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    server_1_link_label_el.css("background-color", "");
                }
            }, 500);
        } else {
            server_1_link_label_el.css("background-color", "#ffb7b5");
            server_1_link_input_el.removeClass("is-valid")
                .addClass("is-invalid");
        }
    });

    $("#buffer-size").on("keyup", function() {
        let buffer_size_input_el = $(this);
        let buffer_size_input_value = parseInt(buffer_size_input_el.val());
        let buffer_size_label_el = $(".buffer-size-label");

        if(buffer_size_input_value>=1 && buffer_size_input_value<1000) {
            buffer_size_label_el.text("Buffer Size: " + buffer_size_input_value + " Bytes")
                .css("background-color", "#d3ffe9");

            buffer_size_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function () {
                if (buffer_size_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    buffer_size_label_el.css("background-color", "");
                }
            }, 500);
        } else if(buffer_size_input_value>=1000 && buffer_size_input_value<1000000) {
            buffer_size_label_el.text("Buffer Size: " + buffer_size_input_value/1000 + " KB")
                .css("background-color", "#d3ffe9");

            buffer_size_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function () {
                if (buffer_size_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    buffer_size_label_el.css("background-color", "");
                }
            }, 500);
        } else if(buffer_size_input_value>=1000000 && buffer_size_input_value<1000000000){
            buffer_size_label_el.text("Buffer Size: " + buffer_size_input_value/1000000 + " MB")
                .css("background-color", "#d3ffe9");

            buffer_size_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function() {
                if (buffer_size_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    buffer_size_label_el.css("background-color", "");
                }
            }, 500);
        } else if(buffer_size_input_value>=1000000000){
            buffer_size_label_el.text("Buffer Size: " + buffer_size_input_value/1000000000 + " GB")
                .css("background-color", "#d3ffe9");

            buffer_size_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function() {
                if (buffer_size_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    buffer_size_label_el.css("background-color", "");
                }
            }, 500);
        } else {
            buffer_size_label_el.css("background-color", "#ffb7b5");
            buffer_size_input_el.removeClass("is-valid")
                .addClass("is-invalid");
        }
    });



    $('#simulator-form').on('submit', function(event) {
        // we don't want the page reloading, so things look dynamic (this will be nice when we use d3's transitions)
        event.preventDefault();
        disableRunSimulationButton();

        $('.chart').css('display', 'block');

        // remove the graphs, since we will append a new ones to the chart
        $('.chart > svg').remove();

        // Upon submission of the form, a POST request containing the user's desired parameters
        // is sent to the node server, where the simulation will be executed with those parameters.
        // Then a response with simulation data is received. The data is parsed, and rendered on the
        // screen.
        $.ajax({
            url: '/run/client_server',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(
                {
                    server_1_link: $("#server-1-link").val(),
                    buffer_size: $("#buffer-size").val(),
                    host_select: $('input[name=host-select]:checked').val(),
                    disk_toggle: $('#disk-toggle').is(':checked') ? true : false
                }),

            success: function(response) {

                // Add the new simulation output into the "Simulation Output" section
                $("#simulation-output").empty()
                    .append(response.simulation_output);

                //generate_host_utilization_graph(response.task_data, 1);
                //generateHostUtilizationGraph(response.task_data, "host-utilization-chart", "host-utilization-chart-tooltip", "host-utilization-chart-tooltip-task-id", "host-utilization-chart-tooltip-compute-time", 1000, 1000);
                //generate_workflow_execution_graph(response.task_data);

                //populateWorkflowTaskDataTable(response.task_data);
            }
        });
    });
});