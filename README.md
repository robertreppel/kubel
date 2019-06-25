# Kubel

A visual design tool to understand system boundaries

- Where does one microservice end and the next one begin?
- Carving up monoliths: Managing coupling & cohesion.
- Based on Domain Driven Design concepts: Bounded Contexts and Ubiquitous Language.
- Decide on service boundaries, in plain English

## Legacy Decomposition Example: Wordpress

> This isn't to imply that the Wordpress code base isn't great. It just happened to have a nice long piece of source lying about which we can use as an example.


https://github.com/WordPress/WordPress/blob/4c0620bdf8b3c1bac314f6b50f15ee6399710ae5/wp-admin/includes/ajax-actions.php has 5000+ lines.


To get an idea of what areas of responsibility and/or concepts which belong together it may cover, let's do some judicious grep magic to retrieve some comments:


```
wget -O - -o /dev/null  https://raw.githubusercontent.com/WordPress/WordPress/4c0620bdf8b3c1bac314f6b50f15ee6399710ae5/wp-admin/includes/ajax-actions.php  \
| grep -E -o "Ajax handler for(.*)" \
| sed 's/Ajax handler for //g'

```


... results in a list of "Ubiquitous Language" in that file. Parsing out variable- and function names names, etc. and other types of comments as well would be even better, but let's start simple.

Take the resulting list of phrases and paste it into...