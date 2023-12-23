    var images = [
        'drie-arm-tablet',
        'voetbal-sprint',
        'samen-schilderen',
        'draaitafel-zwartwit',
        'tennis-speelster',
        'drie-armen-fiets-bal',
        'spelend-balletje',
        'witte-jongens-grote-voetbal',
        'samen-koken',
        'presentie-ipad-buiten',
        'organisator_in_control',
        'familie-samen-achter-computer',
        'tennis',
        'bordspel',
        'schilderen',
        'gezin-ipad',
        'voetbalster',
        'stress',
        'planning',
        'winst-vieren',
        'tennis-ongeloofwaardig',
        'moeder-zoon-computer',
        'presentatie',
        'vader-kind-laptop',
        'zwaardvechter',
        'twee_met_boeken',
        'generaties-achter-computer',
        'winnaars',
        'gezin-apple-computer-ipad',
        'toneel',
        'hoofdpijn-veel-papier',
        'dubbele-draaitafel',
        'blije-kinderen-feest',
        'drie-kinderen',
        'twee-met-pen-en-voetbal',
        'factuur',
        'muziekles-dubbele-piano',
        'estafette-stok',
        'gamen-met-guns',
        'duo-schilderen-tulband-baard',
        'overwhelmed',
        'poppenspelers',
        'moeder-dochter-computer',
        'twee-op-toetsenbord',
        'stapels-stress'
    ];

    window.onload = function() {
  
      var imageIndex = Math.floor(Math.random() * images.length); // Random index based on the array length
      var baseurl = ""; 
      var imagePath = baseurl + '/images/illustrations/' + images[imageIndex]; // Using the filename from the array
  
      var pictureElement = document.getElementById('random-image');
      if (pictureElement) {
          // Clear existing content
          pictureElement.innerHTML = '';
  
          // Create webp source element
          var sourceWebp = document.createElement('source');
          sourceWebp.setAttribute('src', imagePath + '.webp');
          sourceWebp.setAttribute('type', 'image/webp');
          pictureElement.appendChild(sourceWebp);
  
          // Create png source element
          var sourcePng = document.createElement('source');
          sourcePng.setAttribute('src', imagePath + '.png');
          sourcePng.setAttribute('type', 'image/png');
          pictureElement.appendChild(sourcePng);
  
          // Create img element
          var imgElement = document.createElement('img');
          imgElement.setAttribute('src', imagePath + '.png');
          imgElement.setAttribute('alt', 'Random Image');
          imgElement.classList.add('float-right', 'ml-3', 'mb-3');
          pictureElement.appendChild(imgElement);
      } else {
          console.error('Element with id "random-image" not found.');
      }
  };
  