import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Divider
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import CheckIcon from "@material-ui/icons/Check";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/styles";
import Comments from "../comments/Comments";
import Footer from "../layout/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default
  },
  divider: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#ea907a"
  },
  paddingVerified: {
    paddingRight: 3
  },
  verifiedText: {
    marginTop: 2
  },
  visibilityIcon: {
    paddingRight: 5
  },
  blogBody: {
    padding: 25,
    margin: 10
  },
  comments: {
    marginTop: 25
  },
  commentTitle: {
    marginLeft: 10
  }
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction='column'
      justify='center'
      alignItems='center'>
      <Grid item>
        <Typography variant='h1'>Title</Typography>
      </Grid>
      <Grid item>
        <Grid container item>
          <Grid item className={classes.paddingVerified}>
            <CheckIcon />
          </Grid>
          <Grid item className={classes.verifiedText}>
            <Typography variant='subtitle2'>5 mins read</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container item justify='flex-start' alignItems='center'>
          <Grid item className={classes.visibilityIcon}>
            <Tooltip title='Views' arrow placement='left'>
              <VisibilityIcon />
            </Tooltip>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>10008 Views</Typography>
          </Grid>
          <Grid item className={classes.margin}>
            <Tooltip title='Download' arrow placement='right-start'>
              <IconButton aria-label='download'>
                <GetAppIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.blogBody} md={6}>
        <Typography variant='h6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          exercitationem vel sapiente officiis deleniti fugiat quae, at debitis
          magni, dignissimos temporibus ratione culpa accusantium voluptatum
          quia nulla. Eligendi totam sequi, ipsum non minus provident inventore
          fugiat adipisci dignissimos voluptatibus vero. Assumenda quis quo,
          soluta eos aut voluptatum natus, est eligendi sunt labore vitae
          corrupti tempore incidunt facilis fugit nostrum alias architecto
          numquam quas at debitis pariatur doloremque autem! Et reiciendis
          consectetur eum ex animi labore commodi cumque officia perspiciatis
          ipsa magni molestias quae ea adipisci nulla iusto nostrum repellat,
          maiores provident voluptatem qui ut, dolorem ullam similique?
          Obcaecati, consequatur voluptates! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Veniam corrupti deserunt sequi
          architecto cumque maxime voluptatum ratione nesciunt hic magnam
          corporis sint reiciendis laboriosam praesentium, sed ullam, quae ipsum
          error earum libero! Harum odio, nam consectetur nesciunt voluptatum
          reiciendis nihil aliquam distinctio officia, nostrum alias, laborum
          fugiat animi possimus dolores. Ratione commodi numquam architecto, nam
          autem dignissimos, laborum in magni, inventore harum accusamus tempora
          corporis voluptatum consectetur voluptate reiciendis aspernatur
          repudiandae? Similique asperiores inventore nemo veniam, dolorum illo,
          explicabo quia laborum suscipit doloremque aut quaerat quis!
          Praesentium voluptatibus, sequi ipsum quae odio exercitationem ullam
          aperiam rem? Quo, accusamus vero! Commodi labore numquam molestias,
          itaque odio harum minus provident. Ipsum, qui labore. Saepe inventore
          similique dignissimos itaque obcaecati labore placeat adipisci quod.
          Officia dolorem iusto aspernatur porro dolorum quod ea unde, et quos.
          Facere, quisquam ipsum cumque inventore dolor minus eum. Eius
          assumenda eaque aspernatur dolorem eos necessitatibus, itaque ab atque
          amet eum impedit similique tempore, recusandae quasi voluptas nesciunt
          voluptatibus quidem adipisci dolore. Eos rem autem veniam nam quasi
          adipisci consectetur, laborum officia voluptatem ex! Nostrum quas
          aliquam est dolorem alias corrupti iste, vero reiciendis veritatis
          minus, sint molestias qui et consequatur tempora magnam at. Porro
          tenetur quisquam doloribus aliquid quaerat facilis eos dolores impedit
          voluptates. Earum omnis corrupti modi libero quo possimus nemo enim
          iure voluptatem tenetur vitae blanditiis rerum inventore magni esse
          soluta quasi repudiandae, nam accusantium expedita eveniet. Fuga nam
          illo ex totam inventore explicabo, incidunt eius! Et dolor odio minus
          excepturi quisquam nisi omnis voluptatibus reiciendis quod corrupti,
          voluptates, fuga fugit. Minus repellendus reiciendis, error magni
          quisquam dolorum vero ratione, expedita labore animi, beatae aliquid
          repudiandae. Repellat culpa numquam sit doloremque animi consequuntur
          ducimus magnam ipsum sequi. Expedita quis impedit illo facere aperiam
          cum explicabo quidem ad labore doloremque! Quis optio quam iste iure
          error impedit quibusdam? Reiciendis explicabo dolore beatae eius
          suscipit aperiam quam adipisci cumque voluptate exercitationem,
          dolores nesciunt cupiditate mollitia tenetur corporis repellat. Cum
          commodi a eos! Odio repellendus cupiditate voluptate repellat minus
          quia dolore optio, animi eos sed unde beatae, neque natus consectetur,
          porro saepe dicta aliquid quidem consequatur doloremque laudantium?
          Laudantium id, corrupti non libero qui odio amet consequuntur
          consequatur sequi! Similique molestias deleniti placeat sequi?
          Accusantium voluptatum, aliquam, est eveniet provident qui a quaerat
          minima obcaecati quibusdam error adipisci. Hic temporibus aut
          reprehenderit, facilis beatae iusto sapiente rerum voluptate maxime
          ipsum numquam doloribus repudiandae deserunt tempore, quis, eum nam.
          Alias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          deleniti aut hic recusandae reprehenderit eveniet ullam itaque in,
          ipsa perspiciatis delectus dolorem rem deserunt nemo inventore sint
          magni voluptas illum, reiciendis nobis doloremque laboriosam amet ad.
          Natus adipisci quas repudiandae consectetur praesentium incidunt
          nulla, explicabo voluptas quisquam velit sed numquam sapiente aperiam
          ad? Dignissimos ipsa impedit debitis fugiat sequi maiores beatae omnis
          magni rerum aliquam quae labore, facilis exercitationem mollitia
          voluptate laudantium consequuntur, et voluptatibus ab rem illum cum
          incidunt excepturi modi? Iure, possimus sint quasi nihil vel incidunt
          inventore eius est quae laborum repudiandae libero laudantium dolor
          deleniti impedit dolorum excepturi, error voluptas ipsam, velit
          voluptate aspernatur corrupti officiis! Commodi eaque voluptas
          voluptates fugiat laboriosam optio, architecto magnam adipisci esse!
          Enim impedit sit nobis nihil, laboriosam, nesciunt repudiandae,
          molestiae officia reprehenderit quaerat mollitia doloribus vel nulla
          corrupti iusto. Recusandae atque maxime harum rem dolor in dicta? Odio
          omnis quo debitis voluptatibus, quisquam adipisci recusandae iste
          nobis natus facilis earum aperiam vitae sapiente eveniet quaerat
          dolorem eum. Unde nam eligendi esse voluptate? Fugit alias porro hic
          molestias vero fuga, nulla assumenda minima ullam quos dolores
          exercitationem doloribus, magni officiis quas? Sed sint facilis
          tempore. Dignissimos velit asperiores voluptas expedita commodi
          necessitatibus, tenetur exercitationem rem vitae molestiae laborum
          dolores amet inventore ad ipsam hic cum quibusdam laudantium
          perferendis delectus facere sunt explicabo non? Nisi mollitia animi ad
          non doloribus aut veritatis voluptatibus quibusdam laborum cupiditate
          aspernatur ipsa perferendis tenetur cum illo libero, incidunt nihil
          omnis dolorem dignissimos. Possimus, vel provident! Molestiae dolorem
          illo dolorum nisi rerum obcaecati molestias nobis corrupti nam quis
          dignissimos, corporis sequi recusandae expedita in dicta voluptatum
          praesentium saepe amet voluptates dolor facere accusamus excepturi.
          Eaque quod earum tenetur possimus repellat, aspernatur explicabo odit
          adipisci voluptates excepturi, consectetur officiis obcaecati alias.
          Deleniti sint molestiae saepe iure distinctio aperiam dolores aliquam
          rem error. In laborum ad at maxime quae tempore voluptate dolor
          aspernatur deleniti voluptatem ut incidunt quia, tempora aliquam ea!
          Ad facilis minus rem maxime exercitationem delectus, neque sunt autem
          praesentium sapiente quisquam quidem aliquam, ipsam ex earum omnis
          aperiam inventore amet expedita enim repellat odio deserunt deleniti
          iste. Facere nemo velit impedit rerum, veniam nesciunt similique
          eveniet placeat ad, vel, tempora maiores? Maiores molestias, quisquam
          eligendi assumenda impedit distinctio, veritatis quos dolorem iusto
          fugiat aperiam ullam autem nulla tempora maxime. Ullam, provident
          deserunt molestiae sint quis illum quos? Soluta illo quas, minima id
          nostrum, tempore maxime aliquam rerum maiores impedit inventore?
          Consequuntur dolore excepturi ipsum possimus magni. Soluta quo quidem
          assumenda nam praesentium labore eum impedit sed libero magnam.
          Dignissimos, saepe fuga, nesciunt veritatis ex cum nam commodi iure
          eius aspernatur asperiores perspiciatis corrupti totam architecto
          ipsam aut, suscipit atque aliquid molestias? Perferendis aspernatur
          corporis qui ipsam pariatur praesentium, repellendus possimus iure
          saepe, consectetur architecto et aliquid tempora quae facilis. Autem
          alias culpa ipsum modi sequi saepe at veniam amet expedita quae
          distinctio earum vitae, vel impedit cum maiores natus, placeat id
          perspiciatis nostrum in odit minima officia corrupti. Veniam provident
          a minima reprehenderit ratione aliquid dignissimos!
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item className={classes.comments}>
        <Typography variant='h3' className={classes.commentTitle}>
          Comments
        </Typography>
        <Comments />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Blog;
