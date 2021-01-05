---
id: simple-script
title: Simple Script
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

We have written a simple script so you can see how easy it is to create screenshots from the command line. You can find the script in [this repository](https://github.com/websiteshot/simple-script).

<BucketImage prop={image.github.simplescript}></BucketImage>

Clone the repository or copy the script into a shell file. You can start the script as follows:

```bash
./simple-script.sh -a $APIKEY -p $PROJECT -c
```

`$APIKEY` and `$PROJECT` are environment variables in this example. Of course, you can also set the two pieces of information directly as parameters.

The script can also query and output results of a job, or download the first screenshot in a job. A detailed description can be found in the [readme](https://github.com/websiteshot/simple-script#readme).
