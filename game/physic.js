function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
    controls.update();

    for (j = 0; j < ennemies.length; j++)
    {
        coef = Math.floor(Math.random() * 10);
        if (coef % 2 == 0)
            coef = -coef;
        truex = ennemies[j].graphic.position.x + WIDTH / 2;
        truey = ennemies[j].graphic.position.y + HEIGHT / 2;
        if (parseInt(ennemies[j].name.charAt(ennemies[j].name.length - 1),10) % 2 == 0)
        {
            if (x + coef < 0 || x + coef > WIDTH)
                coef = - coef
            movement = new THREE.Vector3(ennemies[j].graphic.position.x + coef,
                                        ennemies[j].graphic.position.y,
                                        ennemies[j].graphic.position.z);
            ennemies[j].graphic.position = movement;
            ennemies[j].position.x = ennemies[j].graphic.position.x;
            ennemies[j].position.y = ennemies[j].graphic.position.y;

        }
        else
        {
            if (y + coef < 0 || y + coef > HEIGHT)
                coef = - coef
            movement = new THREE.Vector3(ennemies[j].graphic.position.x,
                                        ennemies[j].graphic.position.y + coef,
                                        ennemies[j].graphic.position.z);
            ennemies[j].graphic.position = movement;
            ennemies[j].position.x = ennemies[j].graphic.position.x;
            ennemies[j].position.y = ennemies[j].graphic.position.y;
        }
    }
}