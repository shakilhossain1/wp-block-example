<?php

/**
 * Plugin Name: Are You paying attention
 * Description: this is an awesome plugin
 * version: 1.0
 * Author: Shakil Hossain
 * Author URI: https://www.shakilhossain.com
 * Text Domain: custom-block
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Invalid request.' );
}

class AreYouPayingAttention
{
    public function __construct()
    {
        add_action('enqueue_block_editor_assets', [__CLASS__, 'adminAssets']);
    }

    public function adminAssets()
    {
        wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . '/test.js', ['wp-blocks', 'wp-element']);
    }
}

$areYouPayingAttention = new AreYouPayingAttention();