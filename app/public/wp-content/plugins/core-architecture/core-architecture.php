<?php
/**
 * Plugin Name: ThriveWell Care Core Architecture
 * Description: Registers Custom Post Types, custom fields, and exposes them to WPGraphQL for the headless Next.js frontend.
 * Version: 1.0.0
 * Author: Antigravity
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// 1. Headless Redirection Logic
add_action( 'template_redirect', function() {
	// Don't redirect WP admin, cron, REST API, or GraphQL requests
	if ( is_admin() || ( defined( 'DOING_CRON' ) && DOING_CRON ) || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		return;
	}
	
	$request_uri = $_SERVER['REQUEST_URI'] ?? '';
	if ( strpos( $request_uri, '/graphql' ) !== false || strpos( $request_uri, '/wp-json' ) !== false ) {
		return;
	}
	
	wp_redirect( admin_url() );
	exit;
} );

// 2. Register Custom Post Types
add_action( 'init', function() {
	// CPT: Services
	register_post_type( 'service', [
		'labels' => [
			'name'          => 'Services',
			'singular_name' => 'Service',
		],
		'public'        => true,
		'has_archive'   => false,
		'show_in_rest'  => true,
		'menu_icon'     => 'dashicons-heart',
		'supports'      => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
		'show_in_graphql' => true,
		'graphql_single_name' => 'service',
		'graphql_plural_name' => 'services',
	] );

	// CPT: Locations
	register_post_type( 'location', [
		'labels' => [
			'name'          => 'Locations',
			'singular_name' => 'Location',
		],
		'public'        => true,
		'has_archive'   => false,
		'show_in_rest'  => true,
		'menu_icon'     => 'dashicons-location-alt',
		'supports'      => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
		'show_in_graphql' => true,
		'graphql_single_name' => 'location',
		'graphql_plural_name' => 'locations',
	] );

	// CPT: Testimonials
	register_post_type( 'testimonial', [
		'labels' => [
			'name'          => 'Testimonials',
			'singular_name' => 'Testimonial',
		],
		'public'        => true,
		'has_archive'   => false,
		'show_in_rest'  => true,
		'menu_icon'     => 'dashicons-testimonial',
		'supports'      => [ 'title', 'editor' ],
		'show_in_graphql' => true,
		'graphql_single_name' => 'testimonial',
		'graphql_plural_name' => 'testimonials',
	] );

	// CPT: FAQs
	register_post_type( 'faq', [
		'labels' => [
			'name'          => 'FAQs',
			'singular_name' => 'FAQ',
		],
		'public'        => true,
		'has_archive'   => false,
		'show_in_rest'  => true,
		'menu_icon'     => 'dashicons-editor-help',
		'supports'      => [ 'title', 'editor' ],
		'show_in_graphql' => true,
		'graphql_single_name' => 'faq',
		'graphql_plural_name' => 'faqs',
	] );

	// CPT: Team Members
	register_post_type( 'team_member', [
		'labels' => [
			'name'          => 'Team',
			'singular_name' => 'Team Member',
		],
		'public'        => true,
		'has_archive'   => false,
		'show_in_rest'  => true,
		'menu_icon'     => 'dashicons-businessman',
		'supports'      => [ 'title', 'editor', 'thumbnail' ],
		'show_in_graphql' => true,
		'graphql_single_name' => 'teamMember',
		'graphql_plural_name' => 'teamMembers',
	] );
} );

// 3. Register ACF Fields Programmatically
add_action( 'acf/init', function() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	// Service Custom Fields
	acf_add_local_field_group( [
		'key' => 'group_service_details',
		'title' => 'Service Details',
		'fields' => [
			[
				'key' => 'field_service_kicker',
				'label' => 'Kicker',
				'name' => 'kicker',
				'type' => 'text',
				'instructions' => 'Category kicker (e.g. Daily Care, Specialized Support)',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_service_icon',
				'label' => 'Icon Name',
				'name' => 'icon',
				'type' => 'text',
				'instructions' => 'Lucide icon name (e.g. heart, activity, shield)',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_service_who_it_helps',
				'label' => 'Who it helps',
				'name' => 'who_it_helps',
				'type' => 'textarea',
				'instructions' => 'Plain English summary of who this service supports',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_service_what_it_includes',
				'label' => 'What it includes',
				'name' => 'what_it_includes',
				'type' => 'repeater',
				'layout' => 'block',
				'button_label' => 'Add Item',
				'show_in_graphql' => true,
				'sub_fields' => [
					[
						'key' => 'field_service_item_title',
						'label' => 'Item Title',
						'name' => 'title',
						'type' => 'text',
						'show_in_graphql' => true,
					],
					[
						'key' => 'field_service_item_desc',
						'label' => 'Item Description',
						'name' => 'description',
						'type' => 'textarea',
						'show_in_graphql' => true,
					],
				],
			],
		],
		'location' => [
			[
				[
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'service',
				],
			],
		],
		'show_in_graphql' => true,
		'graphql_field_name' => 'serviceDetails',
	] );

	// Location Custom Fields
	acf_add_local_field_group( [
		'key' => 'group_location_details',
		'title' => 'Location Details',
		'fields' => [
			[
				'key' => 'field_location_county',
				'label' => 'County',
				'name' => 'county',
				'type' => 'select',
				'choices' => [
					'west-lothian' => 'West Lothian',
					'edinburgh' => 'Edinburgh',
					'east-lothian' => 'East Lothian',
				],
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_location_tagline',
				'label' => 'Tagline',
				'name' => 'tagline',
				'type' => 'text',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_location_coverage',
				'label' => 'Coverage Notes',
				'name' => 'coverage_notes',
				'type' => 'textarea',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_location_situations',
				'label' => 'Common Local Situations',
				'name' => 'common_situations',
				'type' => 'repeater',
				'show_in_graphql' => true,
				'sub_fields' => [
					[
						'key' => 'field_location_situation_title',
						'label' => 'Situation Title',
						'name' => 'title',
						'type' => 'text',
						'show_in_graphql' => true,
					],
					[
						'key' => 'field_location_situation_desc',
						'label' => 'Situation Description',
						'name' => 'description',
						'type' => 'textarea',
						'show_in_graphql' => true,
					],
				],
			],
		],
		'location' => [
			[
				[
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'location',
				],
			],
		],
		'show_in_graphql' => true,
		'graphql_field_name' => 'locationDetails',
	] );

	// Testimonials Custom Fields
	acf_add_local_field_group( [
		'key' => 'group_testimonial_details',
		'title' => 'Testimonial Details',
		'fields' => [
			[
				'key' => 'field_testimonial_role',
				'label' => 'Author Role',
				'name' => 'role',
				'type' => 'text',
				'instructions' => 'e.g. Daughter of Client, Client',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_testimonial_town',
				'label' => 'Town / Location',
				'name' => 'location',
				'type' => 'text',
				'instructions' => 'e.g. Livingston, Bathgate',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_testimonial_rating',
				'label' => 'Rating (1-5)',
				'name' => 'rating',
				'type' => 'number',
				'default_value' => 5,
				'min' => 1,
				'max' => 5,
				'show_in_graphql' => true,
			],
		],
		'location' => [
			[
				[
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'testimonial',
				],
			],
		],
		'show_in_graphql' => true,
		'graphql_field_name' => 'testimonialDetails',
	] );

	// Team Member Custom Fields
	acf_add_local_field_group( [
		'key' => 'group_team_details',
		'title' => 'Team Member Details',
		'fields' => [
			[
				'key' => 'field_team_role',
				'label' => 'Role',
				'name' => 'role',
				'type' => 'text',
				'show_in_graphql' => true,
			],
			[
				'key' => 'field_team_credentials',
				'label' => 'Credentials',
				'name' => 'credentials',
				'type' => 'text',
				'instructions' => 'e.g. RGN, SSSC Registered',
				'show_in_graphql' => true,
			],
		],
		'location' => [
			[
				[
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'team_member',
				],
			],
		],
		'show_in_graphql' => true,
		'graphql_field_name' => 'teamDetails',
	] );
} );
