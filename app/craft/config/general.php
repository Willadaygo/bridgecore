<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return [
    '*' => [
        'cacheDuration' => false,
        'omitScriptNameInUrls' => true,
        'defaultImageQuality' => 60
    ],
    '.dev' => [
        'devMode' => true,
        'environmentVariables' => [
            'siteUrl' => 'http://bridgecore.dev/'
        ]
    ],
    '.com' => [
        'cacheMethod' => 'redis',
        'environmentVariables' => [
            'siteUrl' => 'https://bridgecore.com/'
        ]
    ]
];