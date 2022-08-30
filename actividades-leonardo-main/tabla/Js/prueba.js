$(document).ready(function () {

    $("#login1").submit(

        function (event) {

            var qatar1 = parseInt($("#catar1").val());

            var ecuador1 = parseInt($("#ecuador1").val());

            var senegal1 = parseInt($("#catar2").val());

            var holanda1 = parseInt($("#senegal1").val());

            var qatar2 = parseInt($("#catar3").val());

            var ecuador2 = parseInt($("#holanda1").val());

            var senegal2 = parseInt($("#ecuador2").val());

            var holanda2 = parseInt($("#senegal2").val());

            var qatar3 = parseInt($("#ecuador3").val());

            var ecuador3 = parseInt($("#holanda2").val());

            var senegal3 = parseInt($("#senegal3").val());

            var holanda3 = parseInt($("#holanda3").val());

            var g_a_qatar = 0, g_e_qatar = 0, p_g_qatar = 0, p_p_qatar = 0, p_qatar = 0;

            var g_a_ecuador = 0, g_e_ecuador = 0, p_g_ecuador = 0, p_p_ecuador = 0, p_ecuador = 0;

            var g_a_senegal = 0, g_e_senegal = 0, p_g_senegal = 0, p_p_senegal = 0, p_senegal = 0;

            var g_a_holanda = 0, g_e_holanda = 0, p_g_holanda = 0, p_p_holanda = 0, p_holanda = 0;

            if (qatar1 > ecuador1) {

                g_a_qatar += qatar1;

                g_a_ecuador += ecuador1;

                g_e_qatar += ecuador1;

                g_e_ecuador += qatar1;

                p_g_qatar += 1;

                p_p_qatar += 0;

                p_g_ecuador += 0;

                p_p_ecuador += 1;

                p_qatar += 3;

                p_ecuador += 0;

            } else if (qatar1 < ecuador1) {

                g_a_qatar += qatar1;

                g_a_ecuador += ecuador1;

                g_e_qatar += ecuador1;

                g_e_ecuador += qatar1;

                p_g_qatar += 0;

                p_p_qatar += 1;

                p_g_ecuador += 1;

                p_p_ecuador += 0;

                p_qatar += 0;

                p_ecuador += 3;

            } else {

                g_a_qatar += qatar1;

                g_a_ecuador += ecuador1;

                g_e_qatar += ecuador1;

                g_e_ecuador += qatar1;

                p_g_qatar += 0;

                p_p_qatar += 0;

                p_g_ecuador += 0;

                p_p_ecuador += 0;

                p_qatar += 1;

                p_ecuador += 1;

            }

            if (senegal1 > holanda1) {

                g_a_senegal += senegal1;

                g_a_holanda += holanda1;

                g_e_senegal += holanda1;

                g_e_holanda += senegal1;

                p_g_senegal += 1;

                p_p_senegal += 0;

                p_g_holanda += 0;

                p_p_holanda += 1;

                p_senegal += 3;

                p_holanda += 0;

            } else if (senegal1 < holanda1) {

                g_a_senegal += senegal1;

                g_a_holanda += holanda1;

                g_e_senegal += holanda1;

                g_e_holanda += senegal1;

                p_g_senegal += 0;

                p_p_senegal += 1;

                p_g_holanda += 1;

                p_p_holanda += 0;

                p_senegal += 0;

                p_holanda += 3;

            } else {

                g_a_senegal += senegal1;

                g_a_holanda += holanda1;

                g_e_senegal += holanda1;

                g_e_holanda += senegal1;

                p_g_senegal += 0;

                p_p_senegal += 0;

                p_g_holanda += 0;

                p_p_holanda += 0;

                p_senegal += 1;

                p_holanda += 1;

            }

            if (qatar2 > senegal2) {

                g_a_qatar += qatar2;

                g_a_senegal += senegal2;

                g_e_qatar += senegal2;

                g_e_senegal += qatar2;

                p_g_qatar += 1;

                p_p_qatar += 0;

                p_g_senegal += 0;

                p_p_senegal += 1;

                p_qatar += 3;

                p_senegal += 0;

            } else if (qatar2 < senegal2) {

                g_a_qatar += qatar2;

                g_a_senegal += senegal2;

                g_e_qatar += senegal2;

                g_e_senegal += qatar2;

                p_g_qatar += 0;

                p_p_qatar += 1;

                p_g_senegal += 1;

                p_p_senegal += 0;

                p_qatar += 0;

                p_senegal += 3;

            } else {

                g_a_qatar += qatar2;

                g_a_senegal += senegal2;

                g_e_qatar += senegal2;

                g_e_senegal += qatar2;

                p_g_qatar += 0;

                p_p_qatar += 0;

                p_g_senegal += 0;

                p_p_senegal += 0;

                p_qatar += 1;

                p_senegal += 1;

            }

            if (holanda2 > ecuador2) {

                g_a_holanda += holanda2;

                g_a_ecuador += ecuador2;

                g_e_holanda += ecuador2;

                g_e_ecuador += holanda2;

                p_g_holanda += 1;

                p_p_holanda += 0;

                p_g_ecuador += 0;

                p_p_ecuador += 1;

                p_holanda += 3;

                p_ecuador += 0;

            } else if (holanda2 < ecuador2) {

                g_a_holanda += holanda2;

                g_a_ecuador += ecuador2;

                g_e_holanda += ecuador2;

                g_e_ecuador += holanda2;

                p_g_holanda += 0;

                p_p_holanda += 1;

                p_g_ecuador += 1;

                p_p_ecuador += 0;

                p_holanda += 0;

                p_ecuador += 3;

            } else {

                g_a_holanda += holanda2;

                g_a_ecuador += ecuador2;

                g_e_holanda += ecuador2;

                g_e_ecuador += holanda2;

                p_g_holanda += 0;

                p_p_holanda += 0;

                p_g_ecuador += 0;

                p_p_ecuador += 0;

                p_holanda += 1;

                p_ecuador += 1;

            }

            if (qatar3 > holanda3) {

                g_a_qatar += qatar3;

                g_a_holanda += holanda3;

                g_e_qatar += holanda3;

                g_e_holanda += qatar3;

                p_g_qatar += 1;

                p_p_qatar += 0;

                p_g_holanda += 0;

                p_p_holanda += 1;

                p_qatar += 3;

                p_holanda += 0;

            } else if (qatar3 < holanda3) {

                g_a_qatar += qatar3;

                g_a_holanda += holanda3;

                g_e_qatar += holanda3;

                g_e_holanda += qatar3;

                p_g_qatar += 0;

                p_p_qatar += 1;

                p_g_holanda += 1;

                p_p_holanda += 0;

                p_qatar += 0;

                p_holanda += 3;

            } else {

                g_a_qatar += qatar3;

                g_a_holanda += holanda3;

                g_e_qatar += holanda3;

                g_e_holanda += qatar3;

                p_g_qatar += 0;

                p_p_qatar += 0;

                p_g_holanda += 0;

                p_p_holanda += 0;

                p_qatar += 1;

                p_holanda += 1;

            }

            if (ecuador3 > senegal3) {

                g_a_ecuador += ecuador3;

                g_a_senegal += senegal3;

                g_e_ecuador += senegal3;

                g_e_senegal += ecuador3;

                p_g_ecuador += 1;

                p_p_ecuador += 0;

                p_g_senegal += 0;

                p_p_senegal += 1;

                p_ecuador += 3;

                p_senegal += 0;

            } else if (ecuador3 < senegal3) {

                g_a_ecuador += ecuador3;

                g_a_senegal += senegal3;

                g_e_ecuador += senegal3;

                g_e_senegal += ecuador3;

                p_g_ecuador += 0;

                p_p_ecuador += 1;

                p_g_senegal += 1;

                p_p_senegal += 0;

                p_ecuador += 0;

                p_senegal += 3;

            } else {

                g_a_ecuador += ecuador3;

                g_a_senegal += senegal3;

                g_e_ecuador += senegal3;

                g_e_senegal += ecuador3;

                p_g_ecuador += 0;

                p_p_ecuador += 0;

                p_g_senegal += 0;

                p_p_senegal += 0;

                p_ecuador += 1;

                p_senegal += 1;

            }

            $("#Gol_a_qatar p").text(g_a_qatar);

            $("#Gol_e_qatar p").text(g_e_qatar);

            $("#p_g_qatar p").text(p_g_qatar);

            $("#p_p_qatar p").text(p_p_qatar);

            $("#p_qatar p").text(p_qatar);

            $("#Gol_a_ecuador p").text(g_a_ecuador);

            $("#Gol_e_ecuador p").text(g_e_ecuador);

            $("#p_g_ecuador p").text(p_g_ecuador);

            $("#p_p_ecuador p").text(p_p_ecuador);

            $("#p_ecuador p").text(p_ecuador);

            $("#Gol_a_senegal p").text(g_a_senegal);

            $("#Gol_e_senegal p").text(g_e_senegal);

            $("#p_g_senegal p").text(p_g_senegal);

            $("#p_p_senegal p").text(p_p_senegal);

            $("#p_senegal p").text(p_senegal);

            $("#Gol_a_holanda p").text(g_a_holanda);

            $("#Gol_e_holanda p").text(g_e_holanda);

            $("#p_g_holanda p").text(p_g_holanda);

            $("#p_p_holanda p").text(p_p_holanda);

            $("#p_holanda p").text(p_holanda);

            event.preventDefault();

        });

}); 
