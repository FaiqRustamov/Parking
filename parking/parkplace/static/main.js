
        $(document).ready(function () {
            $.ajax({
                method: "GET",
                url: "http://localhost:8000/placeapi",
                dataType: "json",
                statusCode: {
                    404: function () {
                        alert("page not found");
                    }
                },
                success: function (data) {
                    counter = 0;
                    for (i = 0; i < data.length; i++) {
                        if (i < 10) {
                            col = $('<div>');
                            col.addClass("vl col-lg-1 col-md-1 col-sm-1 col-xs-1");
                            console.log(counter);
                            counter ++
                            console.log(counter);
                            $('.vl').attr('id', counter);
                            $('.vl').attr('value', data[i].status);
                            
                            console.log($('.vl').attr('value'));
                            if ($('.vl').attr('value') == 'free') {
                                image = $('<img>');
                                image.addClass('car ');
                                
                                $('.car').attr('src', "{% static './images/redcar.jpg' %}");
                            };
                            col.append(image);
                            $('#up').append(col);
                        } else {
                            col = $('<div>');
                            col.addClass("vl col-md-1 offset-md-1");
                            console.log(data[i].number);
                            console.log(data[i].status);
                            $('.vl').attr('id', data[i].number);
                            $('.vl').attr('value', data[i].status);
                            image = $('<img>');
                            image.addClass('car');
                            console.log($('.vl').attr('value'));
                            if ($('.vl').attr('value') == 'free') {
                                $('.car').attr('src', "{% static './../images/redcar.jpg' %}")
                            };
                            col.append(image);
                            $('#down').append(col);
                        }
                    }
                    console.log(data);
                }
            });
        });

