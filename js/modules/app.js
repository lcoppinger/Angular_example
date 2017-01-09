/**
 * Created by 915128 on 1/9/17.
 */
(function(){
  var app = angular.module('myApp', []);

  app.controller('SpeakerController', function(){
    this.products = speakers;
  });

  app.controller('PresController', function(){
    this.products  = presentations;
  });

  app.controller('CaseController', function(){
    this.products = studies;
  });

  var speakers = [
    {
      name: 'Robert Anderton',
      title: 'Digital Leader',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image:'Images/Business%20silhouettes-1.jpg'
    },
    {
      name: 'Mavis Ranallo',
      title: 'Digital Leader',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image:'Images/Business silhouettes-2.jpg'
    },
    {
      name: 'Dominick Chesson',
      title: 'Digital Leader',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image:'Images/Business silhouettes-3.jpg'
    },
    {
      name: 'Dane Savoy',
      title: 'Digital Leader',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image:'Images/Business silhouettes-4.jpg'
    },
    {
      name: 'Kathey Hunziker',
      title: 'Digital Leader',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image:'Images/Business silhouettes-5.jpg'
    },
    {
      name: 'Cameron Kozak',
      title: 'Digital Leader',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image:'Images/Business silhouettes-6.jpg'
    }
  ];

  var presentations = [
    {
      title: 'Lorem ipsum',
      name: 'Robert Anderton',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/background-1.jpg'
    },
    {
      title: 'Lorem ipsum',
      name: 'Mavis Ranallo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/Background-2.jpg'
    },
    {
      title: 'Lorem ipsum',
      name: 'Dominick Chesson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/Background-3.jpg'
    },
    {
      title: 'Lorem ipsum',
      name: 'Dane Savoy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/Background-4.jpg'
    },
    {
      title: 'Lorem ipsum',
      name: 'Kathey Hunziker',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/Background-5.jpg'
    },
    {
      title: 'Lorem ipsum',
      name: 'Cameron Kozak',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/Background-6.jpg'
    }
  ];

  var studies = [
    {
      title: 'Dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/AI-logo.png'
    },
    {
      title: 'Dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/logo2.svg'
    },
    {
      title: 'Dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/slido.png'
    },
    {
      title: 'Dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/fingericon.jpg'
    },
    {
      title: 'Dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam elit accumsan facilisis commodo. Quisque non tortor bibendum risus suscipit vulputate eget a diam.',
      image: 'Images/virtual_reality_background.jpg'
    }
  ];

})();