//property name and value of 'type' property should be the same

(function(){
    angular.module('frodo').constant('fields', {
            text: {
                name: 'Tekst',
                type: 'text'
            },
            textarea: {
                name: 'Pole tekstowe',
                type: 'textarea'
            },
            checkbox: {
                name: 'True/False',
                type: 'checkbox'
            },
            select: {
                name: 'Select',
                type: 'select'
            },
            repeater: {
                name: 'Repeater',
                type: 'repeater'
            },
            number: {
                name: 'Liczba',
                type: 'number'
            },
            file: {
                name: 'Plik',
                type: 'file'
            }
    });
})();