"use client";
import { Group, Text,  Image, SimpleGrid  } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';



export default function StepThree(props) {

    const [files, setFiles] = useState([]);
    console.log("🚀 ~ file: step3.jsx:12 ~ StepThree ~ files", files)

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
          <Image
            key={index}
            src={imageUrl}
            imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
          />
        );
      });


        return (
            <div>


                <Dropzone
                    onDrop={setFiles}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    {...props}
                >
                    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                size={50}
                                stroke={1.5}
                                color={'#52c41a'}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                size={50}
                                stroke={1.5}
                                color={'#ff4d4f'}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size={50} stroke={1.5} />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="sm" color="dimmed" inline mt={7}>
                                Attach as many files as you like, each file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>

            
                <SimpleGrid
                    cols={4}
                    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                    mt={previews.length > 0 ? 'xl' : 0}
                >
                    {previews}
                </SimpleGrid>
            </div>


        )
    }