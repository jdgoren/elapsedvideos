var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <banner> 
        <title>Elapsed Videos</title>
      </banner>
      <list> 
        <section> 
              <listItemLockup> 
                <title>S3 Files</title>
                <decorationLabel>1</decorationLabel>
                     //1. add from here
                <relatedContent> 
                  <grid>
                    <section> 
                           <lockup videoURL="https://s3-us-west-1.amazonaws.com/elapsedvideos-uploaded/nye.mp4">
                            <img src="${this.BASEURL}images/film.jpg" width="500" height="308" />
                          </lockup>   
                        </section>
                  </grid>
                </relatedContent>
              </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}