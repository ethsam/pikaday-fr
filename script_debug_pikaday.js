jQuery( document ).ready( function() {
    new(Marionette.Object.extend( {

        initialize: function() {
            this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );
        },

        //change les strings US en FR ex: July -> Juillet.
        modifyDatepicker: function( dateObject, fieldModel ) {
            dateObject.pikaday._o.i18n = {
                previousMonth : 'Previous Month',
                nextMonth     : 'Next Month',
                months        : ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre'],
                weekdays      : ['Dimanche','Lundi','Mardi','Mercedi','Jeudi','Vendredi','Samedi'],
                weekdaysShort : ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
            };

        }
    }));
});
