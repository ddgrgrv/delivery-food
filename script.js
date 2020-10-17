$(document).ready(function(){
    $(".item__button____restaurants").on("click" , function(){
        $(".modal").css({
            "display" : "flex",
        });

        $(".modal-dialog").css({
            "display" : "block",
        });
    });

    $(".modal__button").on("click", function(){
        $(".modal").css({
            "display" : "none",
        });

        $(".modal-dialog").css({
            "display" : "none",
        });
    });

    $(".modal__close").on("click", function(){
        $(".modal").css({
            "display" : "none",
        });

        $(".modal-dialog").css({
            "display" : "none",
        });
    });
});