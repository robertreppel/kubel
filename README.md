# Taming the Legacy Dragon

## Notes:

### Wordpress

/home/robert/go/src/github.com/Wordpress/WordPress/wp-admin/includes/ajax-actions.php has 5000+ lines.

How do you break it up? 

```grep -E -o "Ajax handler for(.*)" ../../Wordpress/WordPress/wp-admin/includes/ajax-actions.php | sed 's/Ajax handler for //g'```

... results in a list of "Ubiquitous Language" in that file.


Or:

```grep -E -o "Ajax handler for(.*)" ../../Wordpress/WordPress/wp-admin/includes/ajax-actions.php | sed 's/Ajax handler for //g' | sed 's/ /\n/g' | sed 's/:/\n/g' > data/wordpress-ajax-action-language.txt```
