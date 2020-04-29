$(function () {

    // Update the label that says how many tasks will be run
    $("#num-tasks").on("keyup", function () {
        let num_tasks_input_el = $(this);
        let num_tasks_input_value = parseInt(num_tasks_input_el.val());
        let num_tasks_label_el = $(".num-tasks-label");

        if (num_tasks_input_value >= 1 && num_tasks_input_value < 1000) {

            num_tasks_label_el.text(num_tasks_input_value + " Task(s)")
                .css("background-color", "#d3ffe9");

            num_tasks_input_el.removeClass("is-invalid")
                .addClass("is-valid");

            setTimeout(function () {
                if (num_tasks_label_el.css("background-color") == "rgb(211, 255, 233)") {
                    num_tasks_label_el.css("background-color", "");
                }
            }, 500);
        } else {
            num_tasks_label_el.css("background-color", "#ffb7b5");
            num_tasks_input_el.removeClass("is-valid")
                .addClass("is-invalid");
        }
    });

    $('#simulator-form').on('submit', function (event) {
        // we don't want the page reloading, so things look dynamic (this will be nice when we use d3's transitions)
        event.preventDefault();
        disableRunSimulationButton();

        $('.chart').css('display', 'block');

        // remove the graphs, since we will append a new ones to the chart
        $('.chart > svg').remove();

        // get google user information
        let userName = localStorage.getItem("userName");
        let email = localStorage.getItem("email");

        // Upon submission of the form, a POST request containing the user's desired parameters
        // is sent to the node server, where the simulation will be executed with those parameters.
        // Then a response with simulation data is received. The data is parsed, and rendered on the
        // screen. 
        $.ajax({
            url: window.location.protocol + '//' + window.location.hostname + ':3000/run/multi_core_dependent_tasks',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(
                {
                    num_cores: $("#num-cores").val(),
                    num_tasks: $("#num-tasks").val(),
                    userName: userName,
                    email: email
                }),

            success: function (response) {

                // Add the new simulation output into the "Simulation Output" section
                $("#simulation-output").empty().append(response.simulation_output);

                console.log(response.task_data);
                generate_host_utilization_graph(response.task_data.workflow_execution.tasks, $("#num-cores").val());

                generate_workflow_execution_graph(response.task_data.workflow_execution.tasks);

                populateWorkflowTaskDataTable(response.task_data.workflow_execution.tasks);
            }
        });
    });
});