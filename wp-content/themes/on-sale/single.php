<?php
/**
 * The template for displaying all single posts.
 *
 * @package onsale
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php
			do_action( 'storefront_single_post_before' );

			get_template_part( 'content', 'single' );

			/**
			 * @hooked storefront_post_nav - 10
			 */
			do_action( 'storefront_single_post_after' );
			?>

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar('single'); ?>
<?php get_footer(); ?>